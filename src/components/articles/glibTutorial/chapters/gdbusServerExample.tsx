import Head from "next/head"
import styles from 'styles/scss/articles/page.module.scss'
import { Code } from "components/common"

const gdbus_server_example_code = 
`#include <gio/gio.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

GDBusNodeInfo *introspection_data = NULL;

const gchar introspection_xml[] = 
"<node>"
    "<interface name='com.gialuong.TestInterface'>"
        "<method name='Area'>"
            "<arg type='u' name='width' direction='in'/>"
            "<arg type='u' name='height' direction='in'/>"
            "<arg type='u' name='area' direction='out'/>"
        "</method>"
    "</interface>"
"</node>";

static void
handle_method_call(GDBusConnection *connection, 
                    const gchar *sender, 
                    const gchar *object_path, 
                    const gchar *interface_name, 
                    const gchar *method_name,
                    GVariant *parameters, 
                    GDBusMethodInvocation *invocation, 
                    gpointer user_data)
{
    printf("Call to: -o %s -m %s.%s \\n", object_path, interface_name, method_name);

    if (g_strcmp0(method_name, "Area") == 0)
    {
        uint32_t width, height, area;
        g_variant_get(parameters, "(uu)", &width, &height);

        area = width * height;

        g_dbus_method_invocation_return_value(invocation, g_variant_new("(u)", area));
    }
}

static GVariant *
handle_get_property(GDBusConnection *connection,
                    const gchar *sender,
                    const gchar *object_path,
                    const gchar *interface_name,
                    const gchar *property_name,
                    GError **error,
                    gpointer user_data)
{
    return NULL;
}

static gboolean 
handle_set_property(GDBusConnection *connection, 
                    const gchar *sender,
                    const gchar *object_path, 
                    const gchar *interface_name,
                    const gchar *property_name, 
                    GVariant *value,
                    GError **error, 
                    gpointer user_data)
{

}

static const GDBusInterfaceVTable interface_vtable = 
{
    .method_call = handle_method_call,
    .get_property = handle_get_property,
    .set_property = handle_set_property
};

void
bus_acquired_handler(GDBusConnection *connection, 
                        const gchar *name, 
                        gpointer user_data)
{
    printf("bus acquired: %s\\n", name);
    guint registration_id;

    registration_id = g_dbus_connection_register_object(connection,
                                                        "/",
                                                        introspection_data->interfaces[0],
                                                        &interface_vtable,
                                                        NULL,
                                                        NULL,
                                                        NULL);

}

void 
name_acquired_handler(GDBusConnection *connection, 
                        const gchar *name, 
                        gpointer user_data)
{

}

void
name_lost_handler(GDBusConnection *connection, 
                    const gchar *name, 
                    gpointer user_data)
{
    
}

int main() 
{
    guint watcher_id;
    GMainLoop *loop;

    introspection_data = g_dbus_node_info_new_for_xml(introspection_xml, NULL);
    if (introspection_data == NULL)
    {
        printf("create introspection data form xml error");
        exit(-1);
    }

    watcher_id = g_bus_own_name(G_BUS_TYPE_SESSION, "com.gialuong.TestServer",
                                G_BUS_NAME_OWNER_FLAGS_NONE, bus_acquired_handler, 
                                name_acquired_handler, name_lost_handler, NULL, NULL);
    loop = g_main_loop_new(NULL, FALSE);
    g_main_loop_run(loop);

    return 0;
}`

const gdbus_server_build_code =
`gcc -o server server.c \`pkg-config --libs --cflags gio-2.0\``

const gdbus_server_run_code =
`./server`

const gdbus_server_test_code =
`gdbus call -e -d com.gialuong.TestServer -o / -m com.gialuong.TestInterface.Area 10 10`

const gdbus_server_response_test_code = 
`(uint32 100,)`

const GDBusServerExample = () => {
  return (
    <>
      <Head>
        <title>GDBus Server Example</title>
        <meta>dbus server</meta>
        <meta>dbus server example</meta>
        <meta>gdbus server</meta>
        <meta>gdbus server example</meta>
        <meta>how to create dbus server on linux</meta>
      </Head>
      <div className={styles.root}>
        <h1 className={styles.header}>GDBus Server Example</h1>        
        <p>Now i'm creating an dbus server that has a method to caculate area of retangle.</p>
        <p>Bus name: <p className={styles.quote}>com.gialuong.TestServer</p></p>
        <p>Object path: <p className={styles.quote}>/</p></p>
        <p>Method name: <p className={styles.quote}>com.gialuong.TestInterface.Area</p></p>
        <p>File name: <p className={styles.quote}>./server.c</p></p>
        <Code lang={'cpp'}>{gdbus_server_example_code}</Code>
        <h2>Building and run server</h2>
        <Code lang={'bash'}>{gdbus_server_build_code}</Code>
        <Code lang={'bash'}>{gdbus_server_run_code}</Code>
        <h2>Test with <p className={styles.quote}>gdbus</p> commandline</h2>
        <Code lang={'bash'}>{gdbus_server_test_code}</Code>
        <p>Responses</p>
        <Code lang={'base'}>{gdbus_server_response_test_code}</Code>
      </div>
    </>
  )
}

export default GDBusServerExample