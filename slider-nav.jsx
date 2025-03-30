const { useEffect, useState } = React;

const SliderNav = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll(".page");

        const highlightNav = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(highlightNav, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault(); // blocks URL changes
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="slider-nav">
            <a
                href="#page-1"
                className={activeSection === "page-1" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "page-1")}
            ></a>
            <a
                href="#page-2"
                className={activeSection === "page-2" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "page-2")}
            ></a>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("slider-nav-root")).render(<SliderNav />);
