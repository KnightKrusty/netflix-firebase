import React from "react";
import { Accordian, OptForm } from "../components";
import faqData from "../fixtures/faqs.json";

export function FaqsContainer() {
	return (
		<Accordian>
			<Accordian.Title>Frequently Asked Questions</Accordian.Title>
			{faqData.map((item) => (
				<Accordian.Item key={item.id}>
					<Accordian.Header>{item.header}</Accordian.Header>
					<Accordian.Body>{item.body}</Accordian.Body>
				</Accordian.Item>
			))}
			<Accordian.Item></Accordian.Item>

			<OptForm>
				<OptForm.Input placeholder="Email address" />
				<OptForm.Button>Try it now</OptForm.Button>
				<OptForm.Break />
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your
					membership
				</OptForm.Text>
			</OptForm>
		</Accordian>
	);
}
