 const form = document.getElementById('carForm');
const listaCarros = document.getElementById('listaCarros');
let carros = [];

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const marca = document.getElementById('marca').value.trim();
      const modelo = document.getElementById('modelo').value.trim();
      const ano = document.getElementById('ano').value;
      const cor = document.getElementById('cor').value.trim();
      const placa = document.getElementById('placa').value.trim();

      if (!marca || !modelo || !ano || !cor || !placa) return;

      const carro = { marca, modelo, ano, cor, placa };
      carros.push(carro);
      atualizarTabela();

      form.reset();
    });

    function atualizarTabela() {
      listaCarros.innerHTML = '';

      if (carros.length === 0) {
        listaCarros.innerHTML = `<tr class="no-data"><td colspan="5">Nenhum carro cadastrado ainda</td></tr>`;
        return;
      }

      carros.forEach((carro) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${carro.marca}</td>
          <td>${carro.modelo}</td>
          <td>${carro.ano}</td>
          <td>${carro.cor}</td>
          <td>${carro.placa}</td>
        `;
        listaCarros.appendChild(row);
      });
    }