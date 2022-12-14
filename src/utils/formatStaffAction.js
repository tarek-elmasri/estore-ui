// export const actionNames = {
//   create: "إضافة",
//   update: "تحديث بيانات",
//   delete: "حذف",
// };

// export const modelNames = {
//   user: "مستخدم",
//   item: "منتج",
//   category: "تصنيف",
//   authorization: "تصريح",
//   card: "بطاقة",
// };

export const actionNames = [
  { key: "create", value: "إضافة" },
  { key: "update", value: "تحديث بيانات" },
  { key: "delete", value: "حذف" },
  { key: "all", value: "الكل" },
];

export const modelNames = [
  { key: "user", value: "مستخدم" },
  { key: "item", value: "منتج" },
  { key: "category", value: "تصنيف" },
  { key: "authorization", value: "تصريح" },
  { key: "card", value: "بطاقة" },
  { key: "all", value: "الكل" },
];

export const getActionNameValue = (action) =>
  actionNames.find((o) => o.key === action)?.value;

export const getModelNameValue = (model) =>
  modelNames.find((o) => o.key === model)?.value;

export const formatActionToString = (staffAction) => {
  let action = getActionNameValue(staffAction.action) || "حدث غير معرف";
  let model = getModelNameValue(staffAction.model) || "سجل غير معرف";

  return `${action} ${model}`;
};
