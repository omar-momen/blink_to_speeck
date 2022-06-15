export default function auth({ next, router }) {
    if (!localStorage.getItem("langlark_user_token")) {
        return router.push("/login");
    }
    return next();
}
