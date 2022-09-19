
const actionNames = {
  'create': 'إضافة',
  'update': 'تحديث بيانات',
  'delete': 'حذف',
}

const modelNames = {
  'user': 'مستخدم',
  'item': 'منتج',
  'category': 'تصنيف',
  'authorization': 'تصريح',
  'card': 'بطاقة'
}


const formatActionToString = (staffAction) => {
  let action = actionNames[staffAction.action] || 'حدث غير معرف'
  let model = modelNames[staffAction.model] || 'سجل غير معرف'

  return `${action} ${model}`
}

export default formatActionToString