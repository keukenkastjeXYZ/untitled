import {Subscription} from './Subscription';

const subscriptions: Subscription[] = [
    new Subscription(
        false,
        "Anonymous membership",
        "This is the default subscription when you do not know your life buddy and have never seen it before. " +
        "No services are included in this subscription. " +
        "NO REFUNDS.",
        "None",
        0
    ),
    new Subscription(
        false,
        "Bronze membership",
        "This is the default subscription when you have seen your life buddy once or multiple times, but never have spoken to it. " +
        "In this subscription the only available service is information gathering, where you may try to stalk your life buddy to find more information about it.",
        "None",
        0
    ),
    new Subscription(
        false,
        "Silver membership",
        "The subscription for when you know your life buddy, but do not really talk to it (anymore). " +
        "Every higher subscription includes the services of the lower subscriptions and besides the Silver membership includes the service that your life buddy may forget about you if you never talk to it anymore. " +
        "Among others, this subscription also includes the ability to contact your life buddy again and given the level-of-interest no guarantees are given that your life buddy will respond.",
        "When talking to your life buddy, show at least as much interest back.",
        10
    ),
    new Subscription(
        false,
        "Gold membership",
        "The gold membership is perfect for the people that do want to know your life buddy and talk to it, but just want to stay casual friends or colleagues. " +
        "The level-of-interest in this subscription is 2, meaning you will get asked some questions, but not too deep. " +
        "This is the perfect subscription for some casual conversations on a birthday party or at the coffee machine at work! " +
        "Trying to acquire this subscription after a higher subscription may result in an automatic decrease in membership level, as the friendzone acceptance is 50%.",
        "Being able to withstand your life buddies silly and dark humour",
        20
    ),
    new Subscription(
        false,
        "Platinum membership",
        "This is the last subscription that can be subscribed on by multiple people, after this subscription only one person can have the membership, so be quick, because these memberships are super-exclusive! " +
        "The Platinum membership will acquire you a special place. " +
        "You will be an exclusive friend, meaning your life buddy will have a level-of-interest: 3 and try to contact you from time to time to see how you are doing and he tries to make sure you are okay. " +
        "Your life buddy will also try to schedule events/festivals or other fun stuff to do with you. " +
        "There is no best buddy!",
        "Being able to withstand your life buddies music taste, especially when in the car. Being able to listen to weird noises your life buddy makes such as \"Meh\", \"What the fuck\" and dinosaur noises.",
        30
    ),
    new Subscription(
        false,
        "Premium platinum membership",
        "This membership is perfect for the casual dating or friends-with-benefits person. Do note this subscription and its services are not available when higher subscriptions are acquired and can only be filled in by one person. This subscription includes being able to do \"exciting\" stuff whenever you please, but is excluded from any real love.",
        "Being able to handle the awkward situations where your life buddy is falling in love with you but you do not want that, so it all turns to shit in the end, meaning the subscription can fall back to a Silver membership.",
        30
    ),
    new Subscription(
        false,
        "Diamond membership",
        "Are you searching for your true love? Are you willing " +
        "to risk to meet a date while a global pandemic is hip and happening? " +
        "Do you want more then just \"exciting stuff\", but want real love instead? " +
        "Then we got the perfect subscription for you! " +
        "This subscription is for the serious dater, the one that is looking for an honest and loving life buddy. " +
        "The level-of-interest hits 5 in this subscription, meaning 4 is skipped and the conversations can increase exponentially in size and intensity. ",
        "Show as much love for your life buddy as he shows for you and being able to handle thousands of messages. " +
        "If this price has not been payed in time the subscription will fall back to lower subscriptions automatically, such as the Silver subscription, with NO REFUNDS",
        50
    ),
    new Subscription(
        true,
        "Premium diamond membership",
        "Is dating not enough for you? " +
        "Do you want more of that true love? " +
        "Do you want that one subscription no else had before?" +
        " Then this, this is the subscription for you. " +
        "For this subscription you will be rewarded with the title of \"girlfriend\", among other titles such as \"my sunshine\" and other loving names. " +
        "The level-of-interest in this subscription sky rockets to a stunning 10, the highest level possible, as your life buddy will not only send you thousands of messages, but also voice messages, calls, video calls and videos. " +
        "In this very special premium edition a \"snapchat\" account is enabled and as such the \"exciting\" feature will be increased to a level never seen in previous subscriptions before. " +
        "This subscription also includes that your life buddy will prioritize you over everyone and everything else. " +
        "If that was not even enough, he will even do whatever it takes to let you acquire the next subscription! ",
        "You will have to pay in surprises and be yourself, so your life buddy can see what a wonderful person you are. " +
        "You will also have to be able to withstand your life buddy worst moments, such as he might become very nervous to make you able to upgrade to this membership. " +
        "Being able to acquire this membership is only possible under certain conditions and if all requirements are met, it makes up for a life time subscription that will be full of love, joy and happiness. " +
        "Rejecting this subscription can cause your subscription to be reset to one of the lowest levels. " +
        "Accepting this subscription will enable you to do whatever it is you want with your life buddy, as he will always enjoy being around you for the rest of his life. " +
        "Included in this package is your life buddy's ability to wanting to be with you no matter what and as such he will even be able to overcome a long distance.",
        100
    ),
    new Subscription(
        false,
        "Predator membership",
        "There is more? " +
        "There is even more then the amazing premium diamond membership? " +
        "Yes there is. " +
        "Become a true predator by acquiring this subscription. " +
        "What more could there be? " +
        "As an extra add-on to your life you can even live together with your life buddy in your own home with this membership. " +
        "This way your life buddy can help you physically, whenever you want, in all your needs. " +
        "He will be there for you whenever you need him the most and he will enable you to create a lifetime full of happy, crazy and amazing memories.",
        "You will have to live with your life buddy in one home, so you will go through all happy, but also less good moments together. " +
        "You must be prepared to withstand the worst times together and also find ways to find the happiness in each other when dark clouds appear. " +
        "Know that whatever happens, with this subscription you will never stand alone, mentally and physically!\",\n",
        100
    ),
    new Subscription(
        false,
        "Supreme premium predator membership",
        "Last, but for sure not the least, we have the absolutely best of the best, the supreme premium predator membership. " +
        "From all the memberships you can acquire, this will for sure enable you to be the one to make you happy for the rest of your life. " +
        "So what is included this membership, I hear you ask? " +
        "Well, a very special title. " +
        "The price you will have to pay for this subscription is to speak out a word in Dutch and two words in English: \"Ja\" and \"I do\". ",
        "This subscription will then include a stunning marriage and the title \"Life buddy's wife\". " +
        "Not only will it give you yet another title, it will also change your last name into a subpart of the company's name. " +
        "It will make you the queen of the company and as such inherit your lifebuddies last name as your last name. " +
        "This subscription will include being able to rule the kingdom together with your life buddy and making your own palace with him. " +
        "Do you want to secure your future? " +
        "Then there is no better subscription then this one. " +
        "As the previous two subscriptions already do an amazing job at securing your future, this subscription will take things to a whole other level. " +
        "After the marriage you will even be enabled to have kids with your life buddy. " +
        "To become the true yin and yang together.",
        100
    )
]

export default subscriptions;
