export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();
    if (!user.value && to.path === '/') {
        navigateTo('signIn')
    } else if (user.value) {
        if (to.path === 'signIn' || to.path === 'signUp') {
            navigateTo('/')
        }
    }
})