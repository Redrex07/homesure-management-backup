import { r as reactExports } from "../_libs/react.mjs";
const KEY = "homesure.session";
const listeners = /* @__PURE__ */ new Set();
let current = null;
let initialized = false;
function load() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function ensureInit() {
  if (initialized || typeof window === "undefined") return;
  current = load();
  initialized = true;
}
function getSession() {
  ensureInit();
  return current;
}
function setSession(s) {
  current = s;
  if (typeof window !== "undefined") {
    if (s) localStorage.setItem(KEY, JSON.stringify(s));
    else localStorage.removeItem(KEY);
  }
  listeners.forEach((l) => l());
}
function setRole(role) {
  const s = getSession();
  if (!s) return;
  setSession({ ...s, role });
}
function useSession() {
  const [s, setS] = reactExports.useState(() => getSession());
  reactExports.useEffect(() => {
    const fn = () => setS(getSession());
    listeners.add(fn);
    fn();
    return () => {
      listeners.delete(fn);
    };
  }, []);
  return s;
}
export {
  setRole as a,
  setSession as s,
  useSession as u
};
