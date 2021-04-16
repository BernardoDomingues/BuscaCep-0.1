import ViaCepService from '../Service/ViaCepService';

import Swal from 'sweetalert2';

const dadosDeEndereco = async (cep) => {
    const dados = await ViaCepService(cep);
    if (dados.rua) {
      Swal.fire({
        title: `${dados.rua}, Bairro ${dados.bairro}, ${dados.cidade} - ${dados.estado}`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    } else {
        Swal.fire({
        title: `Endereço não encontrado!`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
}

export { dadosDeEndereco }