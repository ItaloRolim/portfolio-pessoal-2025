document.addEventListener('DOMContentLoaded', function() {
    // Textos originais
    const h1Text = document.querySelector('#home h1').innerHTML;
    const pText = document.querySelector('#home p').innerHTML;
    
    // Limpar os textos
    document.querySelector('#home h1').innerHTML = '';
    document.querySelector('#home p').innerHTML = '';
    
    // Função para criar efeito de digitação
    function typeWriter(element, text, i, callback) {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
          typeWriter(element, text, i, callback);
        }, 15); // velocidade da digitação (50ms)
      } else if (callback) {
        setTimeout(callback, 500);
      }
    }
    
    // Iniciar animação no h1
    const h1Element = document.querySelector('#home h1');
    setTimeout(function() {
      typeWriter(h1Element, h1Text, 0, function() {
        // Quando terminar o h1, iniciar o p
        const pElement = document.querySelector('#home p');
        typeWriter(pElement, pText, 0, function() {
          // Mostrar os botões e ícones depois que a digitação terminar
          const buttons = document.querySelector('#home .flex.justify-center.space-x-4');
          const socialIcons = document.querySelector('#home .mt-12');
          
          buttons.style.opacity = '0';
          socialIcons.style.opacity = '0';
          
          buttons.style.display = 'flex';
          socialIcons.style.display = 'flex';
          
          // Animação de fade-in para os botões
          setTimeout(function() {
            buttons.style.transition = 'opacity 1s ease';
            buttons.style.opacity = '1';
            
            // Animação de fade-in para os ícones sociais
            setTimeout(function() {
              socialIcons.style.transition = 'opacity 1s ease';
              socialIcons.style.opacity = '1';
            }, 500);
          }, 300);
        });
      });
    }, 500);
  });