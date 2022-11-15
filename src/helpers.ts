export function getSpecificChild(
  childs: JSX.Element | JSX.Element[] | undefined,
  allowedTypes: string[],
  parent: string,
): JSX.Element[] {
  if (!childs) {
    return [];
  }

  if (isElement(childs) && allowedTypes.includes(childs.type.name)) {
    return [childs];
  } else if (isElement(childs) && allowedTypes.includes(childs.type.name)) {
    return [];
  }

  const hasNoSpecificChilds =
    Array.isArray(childs) && childs.some(c => !allowedTypes.includes(c.type.name));

  if (hasNoSpecificChilds) {
    console.error(` ${parent} expect receive only ${allowedTypes.join(', ')}.`);

    return [];
  }

  if (Array.isArray(childs) && childs.every(c => allowedTypes.includes(c.type.name))) {
    return childs;
  }

  return [];
}

function isElement(e: any): e is JSX.Element {
  return e && !Array.isArray(e);
}
