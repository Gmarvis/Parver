// creating optional types

type None = { _type: "none" };

type Some<T> = { _type: "some"; value: T };

type Optional<T> = None | Some<T>;

const some = <T>(value: T): Some<T> => ({ _type: "some", value: value });
const none = (): None => ({ _type: "none" });

none();
some(24);

function optionalCatch<T>(fn: () => T): Optional<T> {
  try {
    return some(fn());
  } catch {
    return none();
  }
}

const greet = (name: string) => {
  if (name !== "sam") throw new Error("name is not sam");
  return `hello ${name}`;
};

export const handleGreet = optionalCatch(() => greet("sam"));
