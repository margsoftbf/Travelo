import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'test@test.com' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (
					credentials &&
					credentials.email === 'test@test.com' &&
					credentials.password === 'admin123'
				) {
					return { id: '1', name: 'Test User', email: 'test@test.com' };
				}
				return null;
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
});
