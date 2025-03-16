type ReplaceValues<T, U, V> = T extends U
  ? V
  : T extends Array<infer Item>
  ? Array<ReplaceValues<Item, U, V>>
  : T extends Record<string, any>
  ? { [K in keyof T]: ReplaceValues<T[K], U, V> }
  : T;

export const replaceValues = async <U, V>({
  value,
  matchType,
  replacement,
}: {
  value: unknown;
  matchType: (value: unknown) => value is U;
  replacement: (value: U) => V | Promise<V>;
}): Promise<ReplaceValues<typeof value, U, V>> => {
  if (matchType(value)) {
    return replacement(value) as ReplaceValues<typeof value, U, V>;
  }

  if (Array.isArray(value)) {
    return (await Promise.all(
      value.map((item) =>
        replaceValues({ value: item, matchType, replacement })
      )
    )) as ReplaceValues<typeof value, U, V>;
  }

  if (value !== null && typeof value === "object") {
    const newObj: Record<string, unknown> = {};
    for (const key in value) {
      newObj[key] = await replaceValues({
        value: (value as Record<string | number, unknown>)[key],
        matchType,
        replacement,
      });
    }
    return newObj as ReplaceValues<typeof value, U, V>;
  }

  return value as ReplaceValues<typeof value, U, V>;
};
