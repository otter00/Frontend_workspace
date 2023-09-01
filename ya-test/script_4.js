function sorting(array, order, field) {
  return array.sort((a, b) => {
    let aValue = field ? a[field] : a;
    let bValue = field ? b[field] : b;

    let aIndex = order.indexOf(aValue);
    let bIndex = order.indexOf(bValue);

    if (aIndex === -1 && bIndex === -1) {
      if (typeof aValue === "string") {
        return aValue.localeCompare(bValue);
      } else {
        return aValue - bValue;
      }
    } else if (aIndex === -1) {
      return 1;
    } else if (bIndex === -1) {
      return -1;
    } else {
      return aIndex - bIndex;
    }
  });
}
