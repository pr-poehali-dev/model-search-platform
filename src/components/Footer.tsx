const Footer = () => {
  return (
    <footer className="bg-model-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ModelSearch</h3>
            <p className="text-gray-300">
              Платформа поиска кастингов и съемок для моделей и актеров.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">💬</span>
                <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  t.me/vocoders
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:contact@modelsearch.ru" className="hover:underline">
                  contact@modelsearch.ru
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:underline">О нас</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Правила сервиса</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Конфиденциальность</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ModelSearch. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;