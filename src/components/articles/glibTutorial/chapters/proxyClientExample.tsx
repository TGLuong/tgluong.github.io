import Head from "next/head"
import styles from 'styles/scss/articles/page.module.scss'
import { Code } from "components/common"

const client_example_code = 
`#include <stdio.h>
#include <gio/gio.h>

int main() 
{
    GDBusProxy *proxy;
    GVariant *response;

    proxy = g_dbus_proxy_new_for_bus_sync(G_BUS_TYPE_SESSION, G_DBUS_PROXY_FLAGS_NONE, NULL, 
                                          "com.gialuong.TestServer", "/", 
                                          "com.gialuong.TestInterface", NULL, NULL);
    response = g_dbus_proxy_call_sync(proxy, "Area", g_variant_new("(uu)", 10, 10), 
                                      G_DBUS_CALL_FLAGS_NONE, -1, NULL, NULL);
    
    printf("response: %s\\n", g_variant_print(response, TRUE));

    g_object_unref(proxy);

    return 0;
}`

const compile_code = 
`gcc -o client client.c \`pkg-config --cflags --libs gio-2.0\``

const result_code =
`response: (uint32 100,)`

const ProxyClientExample = () => {
  return (
    <>
      <Head>
        <title>GDBus Client example using GDBusProxy</title>
        <meta>How to use GDBusProxy to make gdbus call</meta>
        <meta>GDBus client example</meta>
      </Head>
      <div className={styles.root}>
        <h1 className={styles.header}>GDBus client example using GDBusProry for new method call</h1>
        <Code lang={'cpp'}>{client_example_code}</Code>
        <h2>Build code</h2>
        <Code lang="bash">{compile_code}</Code>
        <h2>Run result</h2>
        <Code lang="bash">{result_code}</Code>
      </div>
    </>
  )
}

export default ProxyClientExample