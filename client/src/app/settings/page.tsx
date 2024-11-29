import Header from "@/components/Header";

const Settings = () => {
  const userSettings = {
    username: "johndoe",
    email: "johndoe@me.com",
    teamName: "Quantum Innovations",
    roleName: "Developer",
  };

  const labelStyles = "block text-sm font-medium dark:text-white";
  const textStyles = "block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm dark:text-white";

  return (
    <div className="p-8">
      <Header name="Settings" />
      <div className="space-y-4">
        <div>
          <label className={labelStyles}>Username</label>
          <div className={textStyles}>{userSettings.username}</div>
        </div>
        <div>
          <label className={labelStyles}>Email</label>
          <div className={textStyles}>{userSettings.email}</div>
        </div>
        <div>
          <label className={labelStyles}>Team</label>
          <div className={textStyles}>{userSettings.teamName}</div>
        </div>
        <div>
          <label className={labelStyles}>Role</label>
          <div className={textStyles}>{userSettings.roleName}</div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
