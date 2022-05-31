$(function () {
  let ind = document.getElementById("customerid");

  document.getElementById("getcustomer").addEventListener('click', () => {
    ExampleUpdate(ind.value, false);
  });

  document.getElementById("resetList").addEventListener('click', () => {
    document.getElementById("customer-rows").innerHTML = "";
    ExampleUpdate(1, true);
  });

  function ExampleUpdate(index, repeat) {
    if (index < 5) {
      $.ajax({
        method: "GET",
        url: "https://pocketpos.co.uk/wp-json/training/v1/customer/" + index,
        success: (res) => {
          let rows = document.getElementById("customer-rows");
          if (!repeat) {
            rows.innerHTML = "";
          }
          if (res) {
            rows.innerHTML += `
            <tr>
              <td>`+ res.id + `</td>
              <td>`+ res.name + `</td>
              <td>`+ res.locations + `</td>
              <td>`+ res.cuisine + `</td>
            </tr>
          `;
          }
          console.trace(repeat);
          if (repeat) {
            ExampleUpdate(++index, true);
          }
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }
  ExampleUpdate(1, true);
});