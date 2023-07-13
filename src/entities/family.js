export default function buildMakeFamily() {
  return function makeFamily({
    id,
    fatherId,
    motherId,
    childrenId
  } = {}) {
    if (fatherId === motherId) {
      throw new Error('Name is required');
    }

    const conflictedWithParentId = childrenId.some(num => num === fatherId || num === motherId);
    if (conflictedWithParentId) {
      throw new Error('Child cannot also be parent');
    }

    return Object.freeze({
      getId: () => id,
      getFatherId: () => fatherId,
      getMotherId: () => motherId,
      getChildrenId: () => childrenId
    });
  };
}