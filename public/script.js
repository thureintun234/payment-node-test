const orderElement = document.querySelector('.order-items')
const url = 'http://localhost:3001/api/checkout/orders'

// fetching data from server
const dataFetch = async (api_url) => {
  const response = await fetch(api_url)
  const responseJson = await (response).json()

  showData(responseJson)
}

dataFetch(url)

// data showing UI
let html = ''
const showData = (orders) => {
  for (let i = 0; i < orders.length; i++) {
    html += `
    <tr>
      <th scope="row">${i + 1}</th>
      <td>${orders[i].name}</td>
      <td>${orders[i].amount}</td>
      <td>${orders[i].quantity}</td>
      <td>${orders[i].voucherCode ? 'Active' : 'None'}</td>
    </tr>
  `
  }
  orderElement.insertAdjacentHTML('beforeend', html)
}

