// Script para adicionar confirmação ao enviar o formulário
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de envio do formulário
        event.preventDefault();
        
        // Obtém os valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Verifica se todos os campos foram preenchidos
        if (name && email && subject && message) {
            // Cria o elemento de overlay para o modal
            const overlay = document.createElement('div');
            overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            
            // Cria o conteúdo do modal
            const modal = document.createElement('div');
            modal.className = 'bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full';
            modal.innerHTML = `
                <div class="text-center">
                    <svg class="mx-auto h-12 w-12 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <h3 class="mt-4 text-xl font-medium text-white">Mensagem Enviada!</h3>
                    <p class="mt-2 text-gray-300">Olá ${name}, sua mensagem foi enviada com sucesso. Entraremos em contato em breve através do email ${email}.</p>
                    <div class="mt-6">
                        <button id="confirm-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300">
                            OK
                        </button>
                    </div>
                </div>
            `;
            
            // Adiciona o modal ao body
            overlay.appendChild(modal);
            document.body.appendChild(overlay);
            
            // Adiciona evento ao botão de confirmação
            document.getElementById('confirm-btn').addEventListener('click', function() {
                // Remove o modal
                document.body.removeChild(overlay);
                
                // Limpa o formulário
                contactForm.reset();
                
                //  realmente enviar os dados para um servidor
                console.log('Dados que seriam enviados:', { name, email, subject, message });
            });
            
            // Também permite fechar clicando fora do modal
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });
        }
    });
});