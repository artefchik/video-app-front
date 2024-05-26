import { Container } from '@/shared/ui/container/ui/Container';
import { Flex } from '@/shared/ui/flex/ui/Flex';
import { navbarLinks } from '@/shared/const/navbarLinks';
import { AppNavLink } from '@/shared/ui/appNavLink/ui/AppNavLink';
import cls from './Header.module.scss';
import { Logo } from '@/shared/ui/logo';

export const Header = () => {
    return (
        <div>
            <Container>
                <Flex className={cls.body} align="center" justify="between">
                    <Logo />
                    <Flex gap='15'>
                        {navbarLinks.map(navbarLink => (
                            <AppNavLink to={navbarLink.path} key={navbarLink.path}>{navbarLink.title}</AppNavLink>))}
                    </Flex>
                </Flex>
            </Container>
        </div>
    );
};
