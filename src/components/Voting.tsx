import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';
import RightContent from './RightContent';
import SearchBar from './SearchBar';
import Link from './Link';
import SmallLink from './SmallLink';

function Voting() {
    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome />
            </LeftContent>
            <RightContent>
                <SearchBar />
                <Link $imageTitle="like" />
                <Link $imageTitle="fav" />
                <Link $imageTitle="dislike" />
                <SmallLink
                    $backgroundColor="#FBE0DC"
                    $imageTitle="back"
                />
            </RightContent>
        </Container>
    );
}

export default Voting;
