import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateProfile = () => {
    const { profileUpdate } = useContext(AuthContext);

    const handleProfileUpdate = (e) => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const displayName = form.get('name');
        const photoURL = form.get('photo');
        const email = form.get('email');
        console.log(displayName, photoURL, email);

        // if(profileUpdate){
        //     return
        // }

        profileUpdate({ displayName, photoURL, email })
            .then((result) => {
                console.log(result.user)
                // Profile updated!
            }).catch((error) => {
                console.error(error)
                // An error occurred
                // ...
            });
    }

    // {displayName, photoURL}

    return (
        <div>
            <form onSubmit={handleProfileUpdate} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div>
                    <h1 className="text-5xl font-bold text-center mb-3">Update Your Profile</h1>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#239B56] text-white">Save</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;