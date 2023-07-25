import HeaderMain from '../content/HeaderMain/HeaderMain';
import Trainer from '../content/Trainer/Trainer';
import Faq from '../content/FAQ/Faq';
import Reviews from '../content/Reviews/Reviews';
import Training from '../content/Training/Training';
import Whom from '../content/Whom/Whom';

export default function Main() {
    return (
        <>
            <HeaderMain />
            <Training />
            <Whom />
            <Trainer />
            <Reviews />
            <Faq />
        </>
    );
}
