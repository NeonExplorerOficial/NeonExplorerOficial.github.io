const filtrador = document.getElementById('filtrador');
const listaRoms = document.getElementById('lista-roms');

filtrador.addEventListener('input', (e) => {
  const textoBuscar = e.target.value.toLowerCase();
  const roms = listaRoms.children;

  for (let i = 0; i < roms.length; i++) {
    const rom = roms[i];
    const nombreRom = rom.textContent.toLowerCase();

    if (nombreRom.includes(textoBuscar)) {
      rom.style.display = 'block';
    } else {
      rom.style.display = 'none';
    }
  }
});
