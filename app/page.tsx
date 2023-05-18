import Posts from "@/components/Posts"
import ProfilePicture from "@/components/ProfilePicture"

export const revalidate = 10

export default function Home() {
	return (
		<div className='mx-auto'>
			<ProfilePicture />
			<p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
				👋&nbsp;
				<span className='whitespace-nowrap'>
					<span className='font-bold'>arliss</span>
				</span>
			</p>
			{/* @ts-expect-error Server Component */}
			<Posts />
		</div>
	)
}
