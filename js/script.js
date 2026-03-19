// /js/script.js for widen.bauska.org
const brianText = `<p>Transcript...
Back on February 23rd, 2026, Daniel Rutnik, Pat Milton, and Cara Tobachnik of CBS News reported on 
a newly uncovered document in the Epstein files showing that beginning in December 2010 under the 
Obama administration, the US Drug Enforcement Agency (DEA) was running an investigation of Jeffrey 
Epstein and 14 other people for money laundering, drug trafficking, and prostitution.

The document showed the investigation called "chain reaction" was still underway in 2015, but then 
the investigation disappeared. Even though the document suggested that it was on the verge of indictments.

As soon as the story broke, Senator Ron Widen of Oregon, the top ranking Democrat on the Senate Finance 
Committee, said, "It appears Epstein was involved in criminal activity that went way beyond pedophilia 
and sex trafficking, which makes it even more outrageous that Attorney General Pam Bondi is sitting on 
several million unreleased files." Weiden has been investigating the finances behind Epstein's criminal 
sex trafficking organization. It was his investigation that turned up the information that JP Morgan 
Chase neglected to report more than a billion dollars ($1,000,000,000) in suspicious financial transactions 
linked to Epstein. Weiden has pushed hard for Treasury Secretary Scott Bessant to produce the records of 
those suspicious transactions for the Senate Finance Committee, but Bessant refuses.

On February 25th, 2 days after the story of the DEA investigation broke, Widen wrote to Terrence C. Cole, 
administrator of the DEA, noting that the fact that Epstein was under investigation by the DOJ's organized 
crime drug enforcement task force suggests that there was ample evidence indicating that Epstein was engaged 
in heavy drug trafficking and prostitution as part of crossborder criminal conspiracy.

This is incredibly disturbing and raises serious questions as to how this investigation by the DEA was handled.
He noted that Epstein and the 14 co-conspirators were never charged for drug trafficking or financial crimes and 
wrote, "I am concerned that the DEA and DOJ during the first Trump administration moved to terminate this 
investigation in order to protect pedophiles." He also noted that the heavy redactions in the document appear to 
go far beyond anything authorized by the Epstein Files Transparency Act and that since the document was not 
classified, there is no reason to withhold an unredacted version of this document from the US Congress.

Weiden asked Cole to produce a number of documents by March 13th, 2026, including an unredacted copy of the memo 
in the files, information about what triggered the investigation, what types of drugs Epstein and his 14 associates 
were buying or selling, when Operation "Chain Reaction" concluded, and what was its result, why no one was charged, 
and why the names of the 14 co-conspirators were redacted.

Today (Mar 18, 2026), Widen sent a letter to Deputy Attorney General Todd Blanch, Trump's former personal lawyer, 
saying, "It is my understanding that shortly after I requested an unredacted copy of the document in the Epstein 
files, the Department of Justice stepped in to prevent DEA from complying with my request.

According to a confidential tip received by my staff, DEA administrator Terry Cole was ready to provide an unredacted 
copy of the memorandum, but you stepped in to prevent him from doing so. My staff inquired with the DEA about the 
status of the production of this document, and the DEA responded by directing questions to your office.

The letter continued, "Your alleged interference in this matter is highly disturbing, not just because it continues 
the DOJ's long-running obstruction of my investigation, but also because of your bizarrely favorable treatment of 
Guileain Maxwell, one of Epstein's closest criminal associates.

I should not have to explain the significance of the fact that Epstein was a target of this high-level DEA investigation.

It suggests the government had ample evidence indicating he was engaged in largecale drug trafficking 
and prostitution as part of crossborder criminal conspiracy and that Epstein was likely pumping his 
victims including underage girls with incapacitating drugs to facilitate abuse. I am at a loss to understand 
why you are blocking further investigation of this matter.

Noting that the document in the files was clearly marked as unclassified at the top of every single page, Widen 
noted, "There is absolutely no reason to withhold an unredacted version of this document from the US Congress." 
He added, "In order to assist my investigation into this matter, I demand that you immediately authorize the 
release of this document." Widen also posted today on social media.

Huge. Deputy Attorney General Todd Blanch, Trump's former personal lawyer, who was also responsible for 
Guileain Maxwell's transfer to a cushy club Fed, has intervened to block the DEA from providing details 
of a mysterious Epstein investigation to my finance committee team. This is stunning interference.

The document I'm after literally says unclassified at the top. The investigation it details is closed.
Given Blanch's close personal ties to Donald Trump, this reeks of a continued cover up to protect key 
names in the Trump administration.

Weiden's post echoes the September 13th, 2019 letter from then chair of the House Intelligence Committee 
Adam Schiff, a Democrat of California, to acting director of national intelligence Joseph Maguire, in 
which Schiff called out Maguire for illegally withholding a whistleblower complaint.

In that 2019 letter, Schiff warned, "The committee can only conclude that the serious misconduct at issue 
involves the President of the United States and or other senior White House or administration officials.

This raises grave concerns that your office together with the Department of Justice and possibly the White 
House are engaged in an unlawful effort to protect the president and conceal from the committee information 
related to his possible serious or flagrant misconduct, abuse of power, or violation of law.

Schiff was right. The whistleblower had flagged Trump's July 2019 phone call with newly elected Ukraine President 
Vetomir Zalinski, demanding Zilinski smear Joe Biden's son, Hunter, before Trump would release the money Congress 
had appropriated for Ukraine to fight off the Russian invasion that had begun in 2014.

That information led to the story that Trump's White House was running its own secret operation in Ukraine. apart 
from the State Department for Trump's own benefit.

That story led to Trump's first impeachment by the House of Representatives for abuse of power and obstruction of 
Congress.

Schiff was the lead impeachment manager of the impeachment trial in the Senate.
And in his closing argument, he implored Senate Republicans to bring accountability to a man without character.
You will not change him. You cannot constrain him. He is who he is. Truth matters little to him. What is right 
matters even less. And decency matters not at all.

You can't trust this president to do the right thing. Not for one minute, not for one election, not for the sake 
of our country. Schiff said, "You just can't. He will not change, and you know it. A man without character or 
ethical compass will never find his way." But Republican senators stood behind Trump. They acquitted him of abuse 
of power by a vote of 48 for conviction to 52 for a quiddle.

Senator Mitt Romney of Utah crossed the aisle to vote with a Democratic minority.
Senate Republicans were unanimous in their vote to acquit Trump of obstruction of Congress.

And here we are..</p>`;

// Function to insert brian's text into divs
function insertTextIntoDivs() {
  // Get all .text divs
  const textDivs = document.querySelectorAll(".text");

  // Insert brian's text into all .text divs
  textDivs.forEach((div) => {
    div.innerHTML = brianText;
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertTextIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
  const viewportWidth = window.innerWidth;
  const baseWidth = 1000;
  const scaleFactor =
    viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
  contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);

