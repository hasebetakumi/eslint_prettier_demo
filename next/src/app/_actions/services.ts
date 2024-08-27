'use server'

export async function createService(formData: FormData) {
  console.log('formData: ', formData)
  console.log('name in formData: ', formData.get('name'))
  console.log('age in formData: ', formData.get('age'))
}

export async function updateService(id: number, formData: FormData) {
  console.log('id: ', id)
  console.log('formData: ', formData)
  console.log('name in formData: ', formData.get('name'))
  console.log('age in formData: ', formData.get('age'))
}

export async function createServiceReturnData(formData: FormData) {
  console.log('formData: ', formData)
  return { name: 'takumi', age: 26 }
}
