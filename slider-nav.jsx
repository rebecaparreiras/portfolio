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

    return (
        <div className="slider-nav">
            <a href="#page-1" className={activeSection === "page-1" ? "active" : ""}></a>
            <a href="#page-2" className={activeSection === "page-2" ? "active" : ""}></a>
            <a href="#page-3" className={activeSection === "page-3" ? "active" : ""}></a>
        </div>
    );
};

// React rendering 
ReactDOM.createRoot(document.getElementById("slider-nav-root")).render(<SliderNav />);
