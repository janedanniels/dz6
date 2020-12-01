function parserUsers(data){
    console.log(data);
    for(const key in data) {
        const {name, username, email, address: {street, suite, city, zipcode,  geo: {lat, lng}}, phone, website, company: {name: nameWork, catchPhrase, bs}} = data[key]
        userNameName = `Лежит пользователь ${name}`,
        userName = `Ник данного пользователя ${username}`,
        userEmail = `У ${userNameName} электронная почта: ${email}`
        userPhone = `С ${userName} можно созвониться по телефону: ${phone}`
        userWebsite = `Для полной информации посетите сайт даного пользователся ${website}`
        userAddress = `${userName} живёт на улице ${street} в городе ${city} в доме ${suite} Почтовый индекс ${zipcode}`
        userLoc = `Так же вы сможете его найти на карте долгота ${lat} , а широта ${lng}`
        userWork = `Работате в компании ${nameWork} В области ${catchPhrase}`
        userBs = `Занимается на этой работе ${bs}`,

        userInfo = `${userNameName}\n${userName}\n${userEmail}\n${userPhone}\n${userWebsite}\n${userAddress}\n${userLoc}\n${userWork}\n${userBs}`
        console.log(userInfo);
    }
}

