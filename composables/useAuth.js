import { createClient } from '@supabase/supabase-js';

const useAuth = () => {
    const supabase = useRuntimeConfig().public.supabase;
    const client = createClient(supabase.url, supabase.key);

    const user = useState('user', () => null);

    client.auth.onAuthStateChange((evt, session) => {
        user.value = session.user || null;
    });

    const register = async (email, password) => {
        const {data, error} = await client.auth.signUp({email, password});
        if (error) throw error;
        user.value = data.user;
    }

    return {
        user,
        register
    }
};

export default useAuth;
