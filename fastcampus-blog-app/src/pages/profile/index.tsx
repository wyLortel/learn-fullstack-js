import Footer from "components/Footer";
import Header from "components/Header";
import PostListCom from "components/PostList";
import Profile from "components/Profile";

export default function ProfilePage() {
    return (
    <>
    <Header/>
    <Profile/>
    <PostListCom hasNavigation={false}/>
    <Footer/>
    </>
    )
}