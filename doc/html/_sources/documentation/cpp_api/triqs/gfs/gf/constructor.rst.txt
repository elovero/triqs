..
   Generated automatically by cpp2rst

.. highlight:: c
.. role:: ref
.. role:: green
.. role:: param


.. _triqs__gfs__gf__constructor:

triqs::gfs::gf::constructor
===========================

*#include <triqs/gfs/gf.hpp>*



**Synopsis**


.. glossary::

   environment
      A structure where information about all documents under the root is
      saved, and used for cross-referencing.  The environment is pickled
      after the parsing stage, so that successive runs only need to read
      and parse new and changed documents.

   source directory
      The directory which, including its subdirectories, contains all
      source files for one Sphinx project.


.. container:: synop-block

   `gf` ()

.. container:: synop-block

   `gf` (gf<Var, Target> const & `x`)

.. container:: synop-block

   :ref:`gf` (gf<Var, Target> && )

.. container:: synop-block

   :ref:`gf` (gf::mesh_t :param:`m`,
   gf::target_shape_t :param:`shape`,
   arrays::memory_layout_t<arity + Target::rank> const & :param:`ml`,
   gf::indices_t const & :param:`ind` = indices_t{})

.. container:: synop-block

   :ref:`gf` (gf::mesh_t :param:`m`, gf::data_t :param:`dat`, gf::indices_t :param:`ind`)

.. container:: synop-block

    6. | :ref:`gf` (gf::mesh_t :param:`m`,
       |   gf::target_shape_t :param:`shape` = target_shape_t{},
       |   gf::indices_t const & :param:`ind` = indices_t{})

.. container:: synop-block

    7. | :ref:`gf` (gf::mesh_t :param:`m`,
       |   gf::data_t :param:`dat`,
       |   arrays::memory_layout_t<arity + Target::rank> const & :param:`ml`,
       |   gf::indices_t :param:`ind`)

.. container:: synop-block

    8. | :ref:`gf` (gf_view<Var, Target> const & :param:`g`)

.. container:: synop-block

    9. | :ref:`gf` (gf_const_view<Var, Target> const & :param:`g`)

.. container:: synop-block

    10. | :green:`template<typename G>`
        | :ref:`gf` (G const & :param:`g`)

.. container:: synop-block

    11. | :green:`template<typename Tag>`
        | :ref:`gf` (mpi_lazy<Tag, gf_const_view<Var, Target> > :param:`l`)



Documentation

 **1)**   Empty Green function (with empty array).



 **8)**   Makes a deep copy of the data



 **9)**   Makes a deep copy of the data



 **10)**   From any object modeling the :ref:`concept_GreenFunction`.



 **11)**   from the mpi lazy operation. Cf MPI section !





Template parameters
^^^^^^^^^^^^^^^^^^^

 * :param:`G` A type modeling :ref:`concept_GreenFunction`.

 * :param:`Tag`


Parameters
^^^^^^^^^^

 * :param:`m` Mesh

 * :param:`shape` Target shape

 * :param:`ml` Memory layout for the *whole* data array

 * :param:`ind` Indices

 * :param:`dat` data arrray

 * :param:`g`

 * :param:`l` The lazy object

  NB : type must be the same, e.g. g2(refuce(g1)) will work only if mesh, Target, Singularity are the same...


Example
^^^^^^^

..
   Included automatically from /mnt/home/wentzell/Dropbox/Coding/triqs/doc/documentation/examples/triqs/gfs/gf_constructors_0.cpp

.. code-block:: cpp

    #include <triqs/gfs.hpp>
    using namespace triqs::gfs;
    int main() {
      auto beta = 10.0;
      gf<imfreq> gf{{beta, Fermion}, {1, 1}};
    }