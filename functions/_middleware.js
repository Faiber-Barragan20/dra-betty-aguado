// Redirige cualquier host que no sea el dominio principal (www, *.pages.dev) a https://drabettyaguado.com
const DOMINIO = 'drabettyaguado.com';

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname !== DOMINIO && url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') {
    url.hostname = DOMINIO;
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
