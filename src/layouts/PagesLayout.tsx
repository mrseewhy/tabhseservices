import { Outlet, useMatches } from "react-router-dom"
import PageHeader from "../components/PageHeader"

const PagesLayout = () => {
    const matches = useMatches();
    const current = matches[matches.length - 1];
    const handle = current?.handle as { title?: string } | undefined;
    const title = handle?.title;

    return (
        <div>
            {title && <PageHeader title={title} />}
            <Outlet />
        </div>
    )
}
export default PagesLayout