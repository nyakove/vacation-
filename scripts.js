var usersNames = [];
for (let i = 0; i < main.user.options.length; i++) {
    usersNames.push(main.user.options[i].text);
}

let persons = [];

const Person = function (name, id) {
    this.name = name;
    this.sex = setSex(id);
    this.daysLeft = 21;
    this.otherDaysLeft = 15;
    this.sickLeaveDays = 0;
    this.personalLeaveMinutes = 1020;
    this.businessTripDays = 0;
    this.id = id;
}

function setSex(id) {

    if (main.user.options[id] === undefined) {
        return undefined;
    }
    
    const MAN_NAMES = 'Абакум, Абрам, Абросим, Аввакум, Август, Авдей, Авдий, Авель, Авенир, Аверий, Аверкий, Аверьян, Авксентий, Аврам, Аврелиан, Автоном, Агап, Агапий, Агапит, Агафангел, Агафон, Аггей, Адам, Адриан, Азар, Азарий, Акакий, Акила, Аким, Акиндин, Акинф, Акинфий, Аксён, Аксентий, Александр, Алексей, Алексий, Альберт, Альфред, Амвросий, Амос, Амфилохий, Ананий, Анастасий, Анатолий, Андрей, Андриан, Андрон, Андроний, Андроник, Анект, Анемподист, Аникей, Аникий, Аникита, Анисий, Анисим, Антиох, Антип, Антипа, Антипий, Антон, Антонин, Антроп, Антропий, Ануфрий, Аполлинарий, Аполлон, Аполлос, Ардалион, Ардальон, Ареф, Арефий, Арий, Аристарх, Аристид, Аркадий, Арнольд, Арон, Арсений, Арсентий, Артамон, Артём, Артемий, Артур, Архип, Асаф, Асафий, Аскольд, Афанасий, Афиноген, Афинодор, Африкан, Бажен, Бенедикт, Богдан, Болеслав, Бонифат, Бонифатий, Борис, Борислав, Бронислав, Будимир, Вавила, Вадим, Валентин, Валериан, Валерий, Варлам, Варламий, Варнава, Варсоноф, Варсонофий, Варфоломей, Василий, Вассиан, Велизар, Велимир, Венедикт, Вениамин, Венцеслав, Веньямин, Викентий, Виктор, Викторий, Викул, Викула, Вилен, Виленин, Вильгельм, Виссарион, Вит, Виталий, Витовт, Витольд, Владилен, Владимир, Владислав, Владлен, Влас, Власий, Вонифат, Вонифатий, Всеволод, Всеслав, Вукол, Вышеслав, Вячеслав, Гавриил, Гаврил, Гаврила, Галактион, Гедеон, Гедимин, Геласий, Гелий, Геннадий, Генрих, Георгий, Герасим, Гервасий, Герман, Гермоген, Геронтий, Гиацинт, Глеб, Гораций, Горгоний, Гордей, Гостомысл, Гремислав, Григорий, Гурий, Гурьян, Давид, Давыд, Далмат, Даниил, Данил, Данила, Дементий, Демид, Демьян, Денис, Денисий, Димитрий, Диомид, Дионисий, Дмитрий, Добромысл, Добрыня, Довмонт, Доминик, Донат, Доримедонт, Дормедонт, Дормидбнт, Дорофей, Досифей, Евгений, Евграф, Евграфий, Евдоким, Евлампий, Евлогий, Евмен, Евмений, Евсей, Евстафий, Евстахий, Евстигней, Евстрат, Евстратий, Евтихий, Евфимий, Егор, Егорий, Елизар, Елисей, Елистрат, Елпидифор, Емельян, Епифан, Епифаний, Еремей, Ермий, Ермил, Ермила, Ермилий, Ермолай, Ерофей, Ефим, Ефимий, Ефрем, Ефремий, Захар, Захарий, Зенон, Зиновий, Зосим, Зосима, Иаким, Иакинф, Иван, Игнат, Игнатий, Игорь, Иероним, Измаил, Измарагд, Изосим, Изот, Изяслав, Илларион, Илиодор, Илья, Иннокентий, Иоанн, Йов, Иона, Иосафат, Иосиф, Ипат, Ипатий, Ипполит, Ираклий, Иринарх, Ириней, Иродион, Исаак, Исаакин, Исай, Исак, Исакий, Исидор, Иустин, Казимир, Каллимах, Каллиник, Каллиопий, Каллист, Каллистрат, Каллисфен, Калуф, Кандидий, Кантидиан, Капик, Капитон, Карион, Карл, Карп, Кастрихий, Касьян, Ким, Киприан, Кир, Кириак, Кирик, Кирилл, Кирсан, Клавдий, Клим, Климент, Климентий, Кондрат, Кондратий, Конон, Конрад, Константин, Корней, Корнелий, Корнил, Корнилий, Ксенофонт, Кузьма, Куприян, Лавр, Лаврентий, Ладимир, Лазарь, Ларион, Лев, Леон, Леонард, Леонид, Леонтий, Леопольд, Логвин, Лонгин, Лука, Лукан, Лукьян, Любим, Любомир, Любомысл, Люциан, Мавр, Маврикий, Мавродий, Май, Макар, Макарий, Македон, Македоний, Максим, Максимиан, Максимилиан, Малх, Мануил, Марат, Мардарий, Мариан, Марин, Марк, Маркел, Маркиан, Марлен, Мартимьян, Мартин, Мартиниан, Мартирий, Мартин, Мартьян, Матвей, Мелентий, Мелетий, Меркул, Меркурий, Мефодий, Мечислав, Милан, Милен, Милий, Мина, Минай, Мирон, Мирослав, Мисаил, Митрофан, Митрофаний, Михаил, Михей, Модест, Моисей, Мокей, Мокий, Мстислав, Назар, Назарий, Наркис, Натан, Наум, Нестер, Нестор, Нефёд, Никандр, Никанор, Никита, Никифор, Никодим, Николай, Никон, Нил, Нифонт, Олег, Олимпий, Онисим, Онисифор, Онуфрий, Орест, Осип, Оскар, Остап, Остромир, Павел, Павлин, Паисий, Палладий, Памфил, Памфилий, Панкрат, Панкратий, Пантелей, Пантелеймон, Панфил, Парамон, Пармен, Парфён, Парфений, Парфентий, Патрикей, Патрикий, Пафнутий, Пахом, Пахомий, Перфилий, Пётр, Пимен, Питирим, Платон, Полиевкт, Полиект, Поликарп, Поликарпий, Порфир, Порфирий, Потап, Потапий, Пров, Прокл, Прокоп, Прокопий, Прокофий, Протас, Протасий, Прохор, Радий, Радим, Радислав, Радован, Ратибор , Ратмир, Рафаил, Роберт, Родион, Роман, Ростислав, Рубен, Рувим, Рудольф, Руслан, Рюрик, Савва, Савватей, Савватий, Савёл, Савелий, Саверий, Савин , Савиниан, Сакердон, Салтан, Самбила, Самсон, Самсоний, Самуил, Светозар, Свирид, Святополк, Святослав, Себастьян, Севастьян, Северин, Северьян, Селиван, Селивёрст, Селифан, Семён, Семион, Серапион, Серафим, Сергей, Сигизмунд, Сидор, Сила, Силан, Силантий, Силуян, Сильван, Сильвестр, Симон, Смарагд, Созон, Созонт, Созонтий, Сократ, Соломон, Сосипатр, Софон, Софоний, Софрон, Софроний, Спартак, Спиридон, Спиридоний, Станимир, Стахий, Станислав, Степан, Стоян, Стратбник, Сысой, Тарас, Твердислав, Творимир, Терентий, Тертий, Тигран, Тигрий, Тимофей, Тимур, Тит, Тихон, Тристан, Трифилий, Трифон, Трофим, Увар, Ульян, Устин, Фабиан, Фадей, Фалалей, Фатьян, Фёдор, Федос, Федосей, Федосий, Федот, Федотий, Федул, Феликс, Фемистокл, Феогност, Феоктист, Феофан, Феофил, Феофилакт, Ферапонт, Филарет, Филат, Филимон, Филипий, Филипп, Филофей, Фирс, Флавиан, Флавий, Флегонт, Флорентий, Флорентин, Флориан, Фока, Фома, Фортунат, Фотий, Фридрих, Фрол, Харитон, Харитоний, Харлам, Харламп, Харлампий, Хрисанф, Христофор, Эдуард, Эмилий, Эмиль, Эммануил, Эразм, Эраст, Эрнест, Эрнст, Ювеналий, Юлиан, Юлий, Юрий, Юстиниан, Яким, Яков, Якуб, Ян, Януарий, Ярополк, Ярослав,';
    const WOMAN_NAMES = 'Августа, Августина, Авдотья, Аврелия, Аврея, Аврора, Агапа, Агапия, Агарь, Агита, Агафа, Агафоклия, Агафоника, Агафья, Агафия, Аглаида, Аглая, Агна, Агнесса, Агния, Аграфена, Агриппина, Ада, Аделаида, Аделина, Аделла, Адель, Адельфина, Адина, Адолия, Адриана, Аза, Азалия, Азелла, Аида, Акилина, Аксинья, Аксиния, Акулина, Алевтина, Александра, Александрина, Алексина, Алёна, Алина, Алиса, Алла, Алфея, Альберта, Альбертина, Альбина, Альвина, Альфия, Амалия, Амата, Амелфа, Анастасия, Анатолия, Ангела, Ангелика, Ангелина, Анджела, Андрея, Андрона, Андроника, Анжелика, Анисья, Анисия, Анна, Антигона, Антониана, Антонида, Антонина, Антония, Анфима, Анфиса, Анфия, Анфуса, Аполлинария, Аполлония, Апраксин, Апрелия, Апфия, Аргентея, Ариадна, Арина, Ария, Арминия, Арсения, Артемида, Артемия, Аста, Астра, Афанасия, Аэлита, Беата, Беатриса, Белла, Бенедикта, Берта, Бландина, Богдана, Божена, Болеслава, Борислава, Бояна, Бронислава, Валентина, Валенсия, Валерия, Ванда, Васёна, Василида, Василина, Василиса, Василия, Василла, Васса, Вацлава, Вевея, Велимира, Велислава, Венедикта, Венуста, Венцеслава, Вера, Вереника, Вероника, Вербния, Веселина, Веста, Вестита, Вива, Вивея, Вивиана, Видина, Викентия, Викторина, Виктбрия, Вила, Вилена, Виленина, Вильгельмина, Виолетта, Виргиния, Виринея, Вита, Виталика, Виталина, Виталия, Витольда, Влада, Владилена, Владимира, Владислава, Владлена, Воислава, Воля, Всеслава, Гала, Галата, Галатея, Гали, Галина, Галла, Галя, Гая, Геласия, Гемелла, Гемина, Гения, Геннадия, Геновефа, Генриетта, Георгина, Гера, Германа, Гертруда, Гея, Глафира, Гликерия, Глорибза, Голиндуха, Гонеста, Гонората, Горгония, Горислава, Гортензия, Градислава, Грета, Далила, Даная, Дарья, Дария, Дебора, Деена, Декабрена, Денесия, Денница, Дея, Диана, Дигна, Дина, Диодора, Дионина, Дия, Доброгнева, Добромила, Добромира, Доброслава, Доминика, Домитилла, Домна, Домника, Домникия, Домнина, Донара, Доната, Дора, Дорофея, Доса, Досифея, Дросида, Дуклида, Ева, Евангелина, Еванфия, Евгения, Евдокия, Евдоксия, Евлалия, Евлампия, Евмения, Евминия, Евника, Евникия, Евномия, Евпраксия, Евсевия, Евстафия, Евстолия, Евтихия, Евтропия, Евфалия, Евфимия, Евфросиния, Екатерина, Елена, Елизавета, Еликонида, Епистима, Епистимия, Ермиония, Ефимия, Ефимья, Ефросиния, Ефросинья, Жанна, Жозефина, Зара, Зарема, Зарина, Зари, Зарина, Звезда, Земфира, Зенона, Зина, Зинаида, Зиновия, Злата, Зоя, Ива, Иванна, Ида, Идея, Изабелла, Изида, Изольда, Илария, Илия, Ильина, Инга, Инесса, Инна, Иоанна, Иовилла, Иола, Иоланта, Ипполита, Ираида, Ирина, Ирма, Исидора, Ифигения, Ия, Каздоя, Казимира, Калерия, Калида, Калиса, Каллиникия, Каллиста, Каллисфения, Кама, Камилла, Кандида, Капитолина, Карина, Каролина, Касиния, Келестина, Керкира, Кетевань, Кикилия, Кима, Кира, Кириакия, Кириана, Кирьяна, Кирилла, Клавдия, Клара, Клариса, Клементина, Клеопатра, Конкордия, Констанция, Корнелия, Кристина, Ксанфиппа, Ксения, Купава, Лавиния, Лавра, Лада, Лариса, Лаура, Леда, Лейла, Лемира, Ленина, Леокадия, Леонида, Леонила, Леонина, Лебния, Лея, Лиана, Ливия, Лидия, Лилиана, Лилия, Лина, Лира, Лия, Лилия, Лонгина, Лора, Лота, Луиза, Лукерья, Лукиана, Лукия, Лукреция, Любава, Любовь, Любомила, Любомира, Людмила, Люцина, Люция, Мавра, Магда, Магдалина, Магна, Маина, Майя, Макрина, Максима, Малания, Малинья, Малина, Мальвина, Мамелфа, Манефа, Маргарита, Мариам, Мариамна, Мариана, Марианна, Марьина, Мариетта, Марина, Марионилла, Мария, Марья, Марка, Маркеллина, Маркиана, Марксина, Марлена, Марта, Мартина, Мартиниана, Марфа, Марья, Мария, Марьяна, Марианна, Мастридия, Матильда, Матрёна, Матрона, Мая, Медея, Мелания, Меланья, Мелитика, Меркурия, Мерона, Милана, Милена, Милица, Милия, Милослава, Милютина, Мина, Минна, Минодора, Мира, Миропия, Мирослава, Мирра, Митродора, Михайлина, Млада, Модеста, Моика, Моника, Мстислава, Муза, Нада, Надежда, Нана, Наркисса, Настасия, Настасья, Наталия, Наталья, Нелли, Ненила, Неонила, Нида, Ника, Нила, Нимфа, Нимфодора, Нина, Нинель, Новелла, Нонна, Ноэми, Ноябрина, Нунехия, Оксана, Октавия, Октябрина, Олдама, Оливия, Олимпиада, Олимпиодора, Олимпия, Ольга, Ольда, Офелия, Павла, Павлина, Паисия, Паллада, Паллидия, Пальмира, Параскева, Патрикия, Пелагея, Перегрина, Перпетуя, Петра, Петрина, Петронилла, Петрония, Пиама, Пинна, Плакида, Плакилла, Платонида, Победа, Полактия, Поликсена, Поликсения, Полина, Поплия, Правдина, Прасковья, Препедигна, Прискилла, Просдока, Пульхерия, Пульхерья, Рада, Радана, Радислава, Радмила, Радомира, Радосвета, Радослава, Радость, Раиса, Рафаила, Рахиль, Ревекка, Ревмира, Регина, Рема, Рената, Римма, Рипсимия, Роберта, Рогнеда, Роза, Розалина, Розалинда, Розалия, Розина, Роксана, Романа, Ростислава, Русина, Руслана, Руфина, Руфиниана, Руфь, Сабина, Савватия, Савелла, Савина, Саломея, Сильвия, Самона, Сарра, Сатира, Светислава, Светлана, Светозара, Святослава, Севастьяна, Северина, Секлетея, Секлетинья, Селена, Селестина, Селина, Серафима, Сибилла, Сильва, Сильвана, Сильвестра, Сильвия, Симона, Синклитикия, Сира, Слава, Снандулия, Снежана, Сола, Соломонида, Сосипатра, Софрония, Софья, София, Станислава, Стелла, Степанида, Стефанида, Стефания, Сусанна, Сюзанна, Тавифа, Таисия, Таисья, Тамара, Тарасия, Татьяна, Текуса, Тереза, Тигрия, Тихомира, Тихослава, Тома, Томила, Транквиллина, Трифена, Трофима, Улита, Ульяна, Урбана, Урсула, Устина, Устиния, Устинья, Фабиана, Фавста, Фавстина, Фаина, Фантика, Феврония, Февронья, Федоза, Федора, Федосия, Федосья, Федотия, Федотья, Федула, Фёкла, Фекуса, Феликса, Фелица, Фелицата, Фелициана, Фелицитата, Фелиция, Феогния, Феодора, Феодосия, Феодота, Феодотия, Феодула, Феодулия, Феозва, Феоктиста, Феона, Феонилла, Фебния, Феопистия, Феосовия, Феофания, Феофила, Фервуфа, Фессалоника, Фессалоникия, Фетиния, Фетинья, Фея, Фива, Фивея, Филарета, Филиппа, Филиппин, Филомена, Филонилла, Филофея, Фиста, Флавия, Флёна, Флора, Флорентина, Флоренция, Флориана, Флорида, Фомаида, Фортуната, Фотина, Фотиния, Фотинья, Франциска, Фрида, Фридерика, Хаврония, Хариесса, Хариса, Харита, Харитина, Хиония, Хриса, Хрисия, Христиана, Христина, Цвета, Цветана, Целестина, Цецилия, Шарлотта, Шушаника, Эвелина, Эгина, Эдит, Элеонора, Элисса, Элла, Эллада, Эллина, Элоиза, Эльвира, Эмилиана, Эмилия, Эмма, Эннафа, Эра, Эрнеста, Эрнестина, Эсмеральда, Эсфирь, Юдифь, Юлиана, Юлиания, Юлия, Юния, Юнона, Юрия, Юстина, Ядвига, Яна, Янина, Ярослава,';

    for (let s = 0; s < main.user.options.length; s++) {
        let name = main.user.options[id].text.substring(0, main.user.options[id].text.indexOf(' ')) + ',';
        if (MAN_NAMES.indexOf(name) > -1)
            return 'male';
        else if (WOMAN_NAMES.indexOf(name) > -1)
            return 'female';
        else
            return undefined;
    }

}

function addPersons() {
    if (localStorage.length == 0 || JSON.parse(localStorage.getItem('personsList')).length != main.user.options.length) {
        for (let i = 0; i < main.user.options.length; i++) {
            persons.push(new Person(main.user.options[i].text, i)) //fix age and sex later
        }
        localStorage.clear();
        localStorage.setItem('personsList', JSON.stringify(persons));
    }
    
    else {
        persons = JSON.parse(localStorage.getItem('personsList'));
    }
}


for (p = 0; p < usersNames.length; p++) {

    users.push({
        name: main.user.options[p].text,
        sex: sex[p],
        daysLeft: 21,
        otherDaysLeft: 15,
        sickLeaveDays: 0,
        personalLeaveMinutes: 1020,
        businessTripDays: 0
    })
}

//var daysLeft = { 0: 21, 1: 21, 2: 21, 3: 21, 4: 21 };
var otherDaysLeft = {
    0: 15,
    1: 15,
    2: 15,
    3: 15,
    4: 15
};
var sickLeaveDays = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0
};
var personalLeaveMinutes = {
    0: 1020,
    1: 1020,
    2: 1020,
    3: 1020,
    4: 1020
};
var businessTripDays = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0
};
var lessOneDay = 'Дата окончания не может быть раньше начала.'
//var userSex = { 0: 1, 1: 0, 2: 1, 3: 0, 4: 1 };
var text = '';

////////////////////////FUNCTIONS STARTS HERE

function getSex() {
    if (users[user].sex == 0)
        return ' оформила '
    else if (users[user].sex == 1)
        return ' оформил '
    else return ' оформил(а) '
}

function globalVar() {
    user = main.user.options.selectedIndex;
    start = new Date($('#start').val());
    finish = new Date($('#finish').val());
    days = (finish - start) / 86400 / 1000 + 1;
}

function setDate() {
    var today = new Date();
    var lastDate = new Date(today.getTime() + 15638400000);
    var min = today.toISOString().slice(0, 10);
    var max = lastDate.toISOString().slice(0, 10);
    var minmin = min;
    var finishmax = new Date(lastDate.getTime() + 2592000000);
    var maxmax = finishmax.toISOString().slice(0, 10);
    $('#start')[0].min = min;
    $('#start')[0].max = max;
    $('#finish')[0].min = minmin;
    $('#finish')[0].max = maxmax;
}

function remClass(index, className) {
    return (className.match(/\balert-\S+/g) || []).join(' ');
}

function selectHours() {
    var a = $("#start")[0];
    var b = $("#finish")[0];
    if (main.type.options.selectedIndex == 3) {
        a.type = 'datetime-local';
        b.type = 'datetime-local';
    } else {
        a.type = 'date';
        b.type = 'date';
    }
}

function reset() {
    $('#start').val("");
    $('#finish').val("");
    $("#start")[0].type = 'date';
    $("#finish")[0].type = 'date';
    main.user.options.selectedIndex = 0;
    main.type.options.selectedIndex = 0;
    $('#result').html('Результат').removeClass(remClass).addClass("alert-secondary");
    globalVar();
}

function selectDaysMath(num) {
    var day = [' день ', ' дня ', ' дней '];
    var a = num % 10;
    var b = num % 100;
    if (a == 1 && b != 11)
        return day[0];
    if (a > 1 && a < 5 && b != 12 && b != 13 && b != 14)
        return day[1];
    else
        return day[2];

}

function selectVacationType() {
    if ($('#start').val() == '' || $('#finish').val() == '') {
        $('#result').html('Введите обе даты!').removeClass(remClass).addClass("alert-danger");
        return
    }

    if (start > finish) {
        $('#start').val('')
        $('#finish').val('')
        $('#result').html(lessOneDay).removeClass(remClass).addClass("alert-danger");
        return
    }

    //	if (userSex[main.user.options.selectedIndex]) {
    //		text = ' оформил '
    //	}
    //	else 
    //		text = ' оформила '

    switch (main.type.options.selectedIndex) {
        case 0:
            simpleVacation();
            break;
        case 1:
            otherVacation();
            break;
        case 2:
            sickLeave();
            break;
        case 3:
            personalLeave();
            break;
        case 4:
            businessTrip();
            break;
    }
}

function simpleVacation() {

    if (days > 15) {
        $('#result').html('Больше 15 дней подряд брать запрещено!').removeClass(remClass).addClass("alert-danger");
        return
    }

    if (days > users[user].daysLeft) {
        $('#result').html('У вас не осталось так много дней отпуска. Остаток: ' + users[user].daysLeft + selectDaysMath(users[user].daysLeft)).removeClass(remClass).addClass("alert-warning");
        return
    }

    users[user].daysLeft -= days;
    $('#result').html('Сотрудник ' + users[user].name + getSex() + days + selectDaysMath(days) + 'отпуска.').removeClass(remClass).addClass("alert-success");

}

function otherVacation() {

    if (days > otherDaysLeft[user]) {
        $('#result').html('У вас не осталось так много дней отпуска. Остаток: ' + otherDaysLeft[user] + selectDaysMath(otherDaysLeft[user])).removeClass(remClass).addClass("alert-warning");
        return
    }
    otherDaysLeft[user] -= days;
    $('#result').html('Сотрудник ' + usersNames[user] + getSex() + days + selectDaysMath(days) + 'отпуска за свой счёт.').removeClass(remClass).addClass("alert-success");
}

function sickLeave() {

    sickLeaveDays[user] += days;
    $('#result').html('Сотрудник ' + usersNames[user] + getSex() + days + selectDaysMath(days) + 'больничного.').removeClass(remClass).addClass("alert-success");
}

function personalLeave() {
    var minutes = (finish - start) / 1000 / 60;

    if (minutes > personalLeaveMinutes[user]) {
        $('#result').html('У вас не осталось так много времени личного отсутствия. Остаток: ' + Math.floor(personalLeaveMinutes[user] / 60) + ' часов ' + personalLeaveMinutes[user] % 60 + ' минут').removeClass(remClass).addClass("alert-danger");
        return
    }

    personalLeaveMinutes[user] -= minutes
    $('#result').html('Сотрудник ' + usersNames[user] + text + Math.floor(minutes / 60) + ' часов ' + minutes % 60 + ' минут личного отсутствия.').removeClass(remClass).addClass("alert-success");
}

function businessTrip() {

    businessTripDays[user] += days;
    $('#result').html('Сотрудник ' + usersNames[user] + text + days + selectDaysMath(days) + 'командировки.').removeClass(remClass).addClass("alert-success");
}
