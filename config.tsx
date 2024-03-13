import React from 'react'
const github_username = 'Dropio12'
const discord_usertag = '5kg'
const discord_userid = '157839368453750784'
const email = 'anass.elhallaoui@gmail.com'

const projects = [
	'Dropio12/filetrust',
	'Dropio12/FlightO',
	'Dropio12/Translator-AI',
	'Dropio12/CryptoBot',
	'Dropio12/ResearchPrinceton'
]

const links = [
	{
		name: 'Linkedin',
		icon: 'fab fa-fw fa-linkedin-in',
		link: 'https://www.linkedin.com/in/badreddine-el-hallaoui-027a08228/',
		description: 'Connect with me!',
	},
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/Dropio12',
		description: 'My Github profile',
	},
	{
		name: 'E-mail',
		icon: 'fas fa-fw fa-at',
		link: `mailto:${email}`,
		description: 'Lets get in touch!',
	},
	{
		name: 'Resume',
		icon: 'fas fa-fw fa-file',
		link: `https://drive.google.com/file/d/1G2i3sFf2IYr8h0H934s1-JzEfYnOLSyY/view?usp=drive_link`,
		description: 'Here\'s my resume!',
	}
]

const info = (
	<>
		<div style={{ lineHeight: '30px' }}>
			<p>Hi!👋</p><br></br>
			<p>
				I'm <span className="highlighted">Anass Badreddine El Hallaoui</span>, currently a{' '}
				student at <span className="highlighted">The Ohio State University</span> in {' '}
				Computer Science Engineering :)
			</p>
			<p>
				I like to write various scripts to automate my daily tasks and I've been
				doing some{' '}
				<span className="highlighted">Data Engineering & AI</span>
				for fun on my spare time.
				I also like to play around with{' '}
				<span className="highlighted">building full stack web applications</span>!
			</p><br></br>
			<p>
				Here's a list of some of the technologies I've been working with recently 
				(it's only from my public repos, so it's not exhaustive 😉 ):
			</p> <br></br>
			<img alt="stats" style={{
								display: 'block',
								marginLeft: 'auto',
								marginRight: 'auto',
							}} 
  				src="https://github-readme-stats.vercel.app/api/top-langs/?username=isaaruwu&show_icons=true&theme=dark&bg_color=0A0A0A&locale=en"/>
		</div>
	</>
)

export {
	github_username,
	discord_usertag,
	discord_userid,
	email,
	projects,
	links,
	info,
}
