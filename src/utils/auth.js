export function getCurrentUser() {

  const saved = localStorage.getItem(
    "webTrainingUser"
  );

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }

}

export function isAdmin() {

  const user = getCurrentUser();

  return (
    user &&
    user.role === "admin"
  );

}