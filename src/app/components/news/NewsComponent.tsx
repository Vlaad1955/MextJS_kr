import WhatsNew from "@/app/components/news/WhatsNew";
import Bestselling from "@/app/components/news/Bestselling";

const NewsComponent = () => {


    return (
        <aside className="right-sidebar">
           <WhatsNew/>
            <Bestselling/>
        </aside>
    );
};

export default NewsComponent;