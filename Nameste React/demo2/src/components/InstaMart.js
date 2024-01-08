import { useState } from "react";

const InstaMart = () => {
    const [sectionConfig, setSectionConfig] = useState("about");
    return (
        <div className="m-8">
            <h1 className="font-bold text-3xl text-center mb-8">Instamart</h1>

            <Section title={'About Instamart'}
                desc={"Lorem20By clicking on this URL you will be exiting HDFC Bank website and entering the website of Computer Age Management Services "}
                isVisible={sectionConfig === "about"}
                setIsVisible={() => {
                    setSectionConfig("about")
                }}
            />
            <Section title={'Mart Team'}
                desc={"Lorem20By clicking on this URL you will be exiting HDFC Bank website and entering the website of Computer Age Management Services LtdKFIN Technologies Private LimitedProtean eGov Technologies Ltd (Formerly NSDL e-Governance Infrastructure Limited)”. <a href='www.hdfcbank.com'>HDFC</a>"}
                isVisible={sectionConfig === "team"}
                setIsVisible={() => {
                    setSectionConfig("team");
                }}
            />
            <Section title={'Mart Demo'}
                desc={"By clicking on this URL you will be exiting HDFC Bank website and entering the website of Computer Age Management Services LtdKFIN Technologies Private LimitedProtean disputes with respect."}
                isVisible={sectionConfig === "demo"}
                setIsVisible={() => {
                    setSectionConfig("demo")
                }}
            />
        </div>
    );
};

const Section = ({ title, desc, isVisible, setIsVisible }) => {
    return (
        <div className=" border p-3 m-3">
            <div className="flex   justify-between">
                <h2 className="font-bold">{title}</h2>
                <button className="bg-slate-500 p-1 rounded-md hover:bg-slate-600 text-white" onClick={() => {
                    isVisible && setIsVisible(false)
                    !isVisible && setIsVisible(true)
                }}>show</button>
            </div>
            {isVisible && <p className="mt-3">{desc}</p>}
        </div>
    )
};


export default InstaMart;