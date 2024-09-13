import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <nav className="">
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                    >Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')} >
                            Log in
                        </Link>
                        <Link
                            href={route('register')} >
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </>
    );
}
