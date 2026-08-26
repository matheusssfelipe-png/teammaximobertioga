// ════════════════════════════════════════════════════════════
// FORMULÁRIO DE AGENDAMENTO - Validação e Redirecionamento
// ════════════════════════════════════════════════════════════

const form = document.getElementById('formAgendamento');
const formSucesso = document.getElementById('formSucesso');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Limpa erros anteriores
    document.querySelectorAll('.field-error').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('.form-group').forEach(el => el.classList.remove('has-error'));

    let valido = true;

    // Validação: Nome
    const nome = document.getElementById('campo-nome').value.trim();
    if (nome.length < 3) {
      document.getElementById('erro-nome').classList.add('show');
      document.getElementById('group-nome').classList.add('has-error');
      valido = false;
    }

    // Validação: Telefone
    const telefone = document.getElementById('campo-telefone').value.trim();
    const telDigits = telefone.replace(/\D/g, '');
    if (telDigits.length < 10 || telDigits.length > 11) {
      document.getElementById('erro-telefone').classList.add('show');
      document.getElementById('group-telefone').classList.add('has-error');
      valido = false;
    }

    // Validação: Email
    const email = document.getElementById('campo-email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('erro-email').classList.add('show');
      document.getElementById('group-email').classList.add('has-error');
      valido = false;
    }

    // Validação: Faixa
    const faixa = document.getElementById('campo-faixa').value;
    if (!faixa) {
      document.getElementById('erro-faixa').classList.add('show');
      document.getElementById('group-faixa').classList.add('has-error');
      valido = false;
    }

    // Validação: LGPD
    const lgpd = document.getElementById('campo-lgpd').checked;
    if (!lgpd) {
      document.getElementById('erro-lgpd').classList.add('show');
      valido = false;
    }

    // Se não validou, foca no primeiro erro
    if (!valido) {
      const primeiroErro = form.querySelector('.has-error input, .has-error select');
      if (primeiroErro) primeiroErro.focus();
      return;
    }

    // Se validou: salvar dados e redirecionar
    const dadosAluno = {
      nome: nome,
      telefone: telefone,
      email: email,
      faixa: faixa,
      timestamp: new Date().toISOString()
    };

    // Salvar em SessionStorage
    sessionStorage.setItem('dadosAgendamento', JSON.stringify(dadosAluno));

    // Redirecionar para página de agendamento
    window.location.href = '/agendamento.html';
  });
}
