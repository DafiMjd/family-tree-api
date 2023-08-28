export default function buildMakeFamilyMdl() {
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

    return {
      id: id,
      fatherId: fatherId,
      motherId: motherId,
      childrenId: childrenId,
    };

    function json() {
      return JSON.stringify(this);
    }
  };
}