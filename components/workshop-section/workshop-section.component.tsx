// Utils
import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "../image/image.component"
import Accordion from "../accordion/accordion.component"

const WorkshopSection: React.FC = () => {
	const [program, setProgram] = useState([
		{
			id: "day-1",
			title: `Workshop 20.07 "Salle du haut"`,
			showContent: false,
			items: [
				{
					id: "item-1",
					time: "11.00 - 12.30",
					title: `RMRK use cases and building cross-chain compatible composable advanced NFTs`,
					speaker: {
						name: "Bruno Skvorc",
						image: {
							src: "/assets/speakers/bruno-skvorc.png",
							alt: "Bruno Skvorc",
						},
						logo: {
							src: "/assets/partners/day-2/rmrk.png",
							alt: "RMR",
						},
					},
				},
			],
		},
		{
			id: "day-2",
			title: `Workshop 21.07 "Salle du haut"`,
			showContent: false,
			items: [
				{
					id: "item-1",
					time: "11:00 - 16:30",
					title: `Workshop`,
				},
			],
		},
	])

	const openEventDayProgram = (
		showContent: boolean,
		i: number
		// dayID: string
	) => {
		setProgram([
			...program.map((e, id) => {
				if (i === id) {
					return {
						...e,
						showContent: showContent,
					}
				} else {
					return {
						...e,
						showContent: e.showContent,
					}
				}
			}),
		])
	}

	// console.log(program)

	return (
		<SectionContainer id="workshop">
			<TitleFigure
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				transition={{
					duration: 0.6,
					// delay: 0.5,
				}}
				viewport={{ once: true }}
			>
				<Image
					src={"/assets/workshop-section/Workshop.png"}
					alt="ilu"
					effect="blur"
					style={{
						objectFit: "contain",
					}}
					width={"100%"}
					// height={20}
				/>
			</TitleFigure>

			<div>
				{program.map((day, idx) => (
					<Accordion
						showContent={program[idx].showContent}
						openEventDayProgram={openEventDayProgram}
						key={idx}
						idx={idx}
						item={day}
						dayID={day.id}
					/>
				))}
			</div>
		</SectionContainer>
	)
}

export default WorkshopSection

const SectionContainer = styled.section`
	scroll-margin-top: 10rem;
	max-width: 117rem;
	margin: 5rem auto 10rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			/* padding: 0 1rem; */
			margin: 10rem auto 15rem;
		}
	}
`
const TitleFigure = styled(motion.figure)`
	position: relative;
	max-width: 50rem;
	margin: 0 auto 5rem;
`
