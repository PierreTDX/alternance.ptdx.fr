import "./contact.scss";
import ContactMe from "@/components/ContactMe/ContactMe";
import SendMeEmail from "@/components/SendMeEmail/SendMeEmail";
import ReadyToCollaborate from "@/components/ReadyToCollaborate/ReadyToCollaborate";

export default function Contact() {
    return (
        <>
            <section className="headTitle">
                <h1>
                    Prenons <span className="important">Contact</span>
                </h1>
                <p>
                    Vous avez un projet ? Une opportunité d’alternance ?
                </p>
                <p>
                    Je serais ravi d’échanger avec vous !
                </p>
            </section>
            <section className="contact">
                <div className="sectionContent contacContent">
                    <ContactMe />
                    <SendMeEmail />
                </div>
            </section>
            <section className="readyToCollaborate">
                <div className="sectionContent readyToCollaborateContent">
                    <ReadyToCollaborate />
                </div>
            </section>
        </>
    );
}