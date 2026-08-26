// ════════════════════════════════════════════════════════════
// CALENDÁRIO DE AGENDAMENTO - Seleção de Data
// ════════════════════════════════════════════════════════════

let mesAtual = new Date().getMonth();
let anoAtual = new Date().getFullYear();
let diaSelecionado = null;

// Recuperar dados do SessionStorage
const dadosAluno = JSON.parse(sessionStorage.getItem('dadosAgendamento'));

// Se não houver dados, redirecionar para home
if (!dadosAluno) {
  window.location.href = '/';
}

// Preencher resumo do aluno
if (dadosAluno) {
  document.getElementById('resumo-nome').textContent = dadosAluno.nome;
  document.getElementById('resumo-email').textContent = dadosAluno.email;
  document.getElementById('resumo-faixa').textContent = dadosAluno.faixa;
}

// ── GERADORES DE CALENDÁRIO ──

function obterNomeMes(mes) {
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return meses[mes];
}

function obterNomeDiaSemana(dia) {
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return dias[dia];
}

function gerarCalendario(mes, ano) {
  const container = document.getElementById('dias-calendario');
  container.innerHTML = '';

  // Atualizar título do mês
  document.getElementById('mes-ano').textContent = `${obterNomeMes(mes)} ${ano}`;

  // Primeiro dia do mês
  const primeirodia = new Date(ano, mes, 1).getDay();
  const diasNoMes = new Date(ano, mes + 1, 0).getDate();
  const hoje = new Date();

  // Preencher dias vazios antes do primeiro dia do mês
  for (let i = 0; i < primeirodia; i++) {
    const empty = document.createElement('div');
    empty.className = 'dia disabled';
    empty.textContent = '';
    container.appendChild(empty);
  }

  // Preencher dias do mês
  for (let dia = 1; dia <= diasNoMes; dia++) {
    const diaElement = document.createElement('div');
    diaElement.className = 'dia';
    diaElement.textContent = dia;

    const dataDia = new Date(ano, mes, dia);
    const diaSemana = dataDia.getDay(); // 0 = domingo, 6 = sábado

    // Desabilitar domingos (0) e sábados (6)
    if (diaSemana === 0 || diaSemana === 6) {
      diaElement.classList.add(diaSemana === 0 ? 'domingo' : 'sabado');
      diaElement.disabled = true;
      container.appendChild(diaElement);
      continue;
    }

    // Desabilitar dias já passados
    if (dataDia < new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())) {
      diaElement.classList.add('disabled');
      diaElement.disabled = true;
      container.appendChild(diaElement);
      continue;
    }

    // Adicionar listener aos dias clicáveis
    diaElement.addEventListener('click', () => {
      selecionarDia(diaElement, dia, mes, ano, diaSemana);
    });

    container.appendChild(diaElement);
  }
}

// ── SELEÇÃO DE DIA ──

function selecionarDia(element, dia, mes, ano, diaSemana) {
  // Remover seleção anterior
  document.querySelectorAll('.dia.selecionado').forEach(el => {
    el.classList.remove('selecionado');
  });

  // Marcar novo dia como selecionado
  element.classList.add('selecionado');

  // Armazenar data selecionada
  diaSelecionado = {
    dia: dia,
    mes: mes,
    ano: ano,
    diaSemana: diaSemana
  };

  // Atualizar resumo
  atualizarResumo();

  // Habilitar botão de confirmação
  document.getElementById('btn-confirmar').disabled = false;
}

// ── ATUALIZAÇÃO DE RESUMO ──

function atualizarResumo() {
  if (!diaSelecionado) return;

  const { dia, mes, ano, diaSemana } = diaSelecionado;
  const nomeDia = obterNomeDiaSemana(diaSemana);
  const nomeMes = obterNomeMes(mes);

  const formatoData = `${nomeDia}, ${dia} de ${nomeMes}`;
  document.getElementById('dia-confirmacao').textContent = formatoData;
}

// ── NAVEGAÇÃO DE MESES ──

document.getElementById('mes-anterior').addEventListener('click', () => {
  mesAtual--;
  if (mesAtual < 0) {
    mesAtual = 11;
    anoAtual--;
  }
  diaSelecionado = null;
  document.getElementById('btn-confirmar').disabled = true;
  document.getElementById('dia-confirmacao').textContent = 'Selecione um dia';
  gerarCalendario(mesAtual, anoAtual);
});

document.getElementById('proximo-mes').addEventListener('click', () => {
  mesAtual++;
  if (mesAtual > 11) {
    mesAtual = 0;
    anoAtual++;
  }
  diaSelecionado = null;
  document.getElementById('btn-confirmar').disabled = true;
  document.getElementById('dia-confirmacao').textContent = 'Selecione um dia';
  gerarCalendario(mesAtual, anoAtual);
});

// ── CONFIRMAÇÃO E WHATSAPP ──

document.getElementById('btn-confirmar').addEventListener('click', () => {
  if (!diaSelecionado || !dadosAluno) return;

  const { dia, mes, ano } = diaSelecionado;
  const nomeMes = obterNomeMes(mes);
  const dataFormatada = `${dia} de ${nomeMes} de ${ano}`;

  // Montar mensagem WhatsApp
  const mensagem = `
Olá! Quero agendar uma aula experimental.

*Dados do aluno:*
Nome: ${dadosAluno.nome}
Telefone: ${dadosAluno.telefone}
Email: ${dadosAluno.email}
Faixa: ${dadosAluno.faixa}

*Data agendada:*
Data: ${dataFormatada}
Horário: 19h00

Obrigado!
  `.trim();

  // URL WhatsApp (usando wa.me)
  const numeroWhatsApp = '5513982071430';
  const mensagemCodificada = encodeURIComponent(mensagem);
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  // Limpar SessionStorage
  sessionStorage.removeItem('dadosAgendamento');

  // Abrir WhatsApp
  window.open(urlWhatsApp, '_blank');

  // Redirecionar para home após 1 segundo
  setTimeout(() => {
    window.location.href = '/?agendamento=sucesso';
  }, 1000);
});

// ── INICIALIZAÇÃO ──

gerarCalendario(mesAtual, anoAtual);
