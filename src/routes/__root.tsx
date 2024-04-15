import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Web Speech
        </Link>
        <Link to="/geo-location" className="[&.active]:font-bold">
          Geo Location
        </Link>
        <Link to="/notification" className="[&.active]:font-bold">
          Notification
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
