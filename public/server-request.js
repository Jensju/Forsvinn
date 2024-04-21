export async function getAllDishes() {
  const res = await fetch('/menues/')
  const data = await res.json()
  return data
}

export async function addNewDish(dish) {
  let res = await fetch('/menues/', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dish)
  })

  res = await res.json()
  console.log(res);
}

export async function getOneDish(dishId) {
  const res = await fetch('/menues/' + dishId)
  const data = await res.json()
  return data;
}

export async function updateDish(user) {
  let res = await fetch('/menues/' + user.id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })

  res = await res.json()
  console.log(res);
}

export async function deleteDish(dish) {
  const res = await fetch('/menues/' + dish.id, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dish)
  })

  res = await res.json()
  console.log(res);
}

export async function getUser() {
  const res = await fetch('/users/')
  const data = await res.json()
  return data
}

export async function getAccess() {
  const res = await fetch('/access/')
  const data = await res.json()
  return data;
}

export async function updateAccess(access) {
  let res = await fetch('/access/' + access.id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(access)
  })

  res = await res.json()
  console.log(res);
}
