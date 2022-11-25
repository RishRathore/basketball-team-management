export const findDuplicates = (obj, input) => {
    obj[input.index] = input;

    let unique = obj.filter(function (v) {
      return (
        obj.filter(function (v1) {
          return v1.id === v.id && v.id;
        }).length === 1
      );
    });

    let repeated = obj.filter(function (v) {
      return (
        obj.filter(function (v1) {
          return v1.id === v.id && v.id;
        }).length > 1
      );
    });

    // getting different value
    unique.forEach((item) => {
      obj[obj.indexOf(item)] = { ...item, error: false };
    });

    // getting repeated value
    repeated.forEach((item) => {
      obj[obj.indexOf(item)] = { ...item, error: true };
    });
};
